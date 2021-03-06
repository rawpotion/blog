import remark from 'remark'
import html from 'remark-html'

const markdownToHtml = async (markdown: string) => (await remark().use(html).process(markdown)).toString();

export default markdownToHtml
