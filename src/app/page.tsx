import { OrderArrayBy, getFromContent } from '../utils'
import { Content } from '../data/types';
import Markdown from 'markdown-to-jsx';

export default function Home() {

  const contentFiles: Content[] = getFromContent<Content>('content');
  const articles = OrderArrayBy(contentFiles, 'slug');

  return (
    <main className="p-24">
      <h1>Your files</h1>
      {
        articles.map((contentFile:Content) => (
          <div key={contentFile.slug} className='p-10'>
            <h2>{contentFile.title}</h2>
            <article className='prose max-w-none'>
              <Markdown>
                {contentFile.content}
              </Markdown>
            </article>
          </div>
        ))
      }
    </main>
  )
}
