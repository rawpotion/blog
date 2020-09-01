import Avatar from './avatar'
import DateFormater from './date-formater'
import CoverImage from './cover-image'
import PostTitle from './post-title'
import Author from '../types/author'
import React from "react";

type Props = {
  title: string
  coverImage: string
  date: string
  author: Author
    ogImage: {
      url: string;
      author: string;
      origin: string;
    }
}

const PostHeader = ({ title, coverImage, date, author, ogImage }: Props) =>
    (
        <>
            <PostTitle>{title}</PostTitle>
            <div className="hidden md:block md:mb-12">
                <Avatar name={author.name} picture={author.picture}/>
            </div>
            <div className="mb-4 md:mb-8 sm:mx-0">
                <CoverImage title={title} src={coverImage}/>
            </div>
            <div className="mb-6 md:mb-12 sm:mx-0">
                <p className="text-center text-gray-700">
                    {ogImage.origin} - {ogImage.author}
                </p>
            </div>
            <div className="max-w-2xl mx-auto">
                <div className="block md:hidden mb-6">
                    <Avatar name={author.name} picture={author.picture}/>
                </div>
                <div className="mb-6 text-lg">
                    <DateFormater dateString={date}/>
                </div>
            </div>
        </>
    )

export default PostHeader
