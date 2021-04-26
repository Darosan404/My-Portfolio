import MarkdownStyle from './markdown-styles.module.css';

export default function Markdown({ content }) {
  return (
    <>
      <div
        className={MarkdownStyle.markdown}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </>
  );
}
