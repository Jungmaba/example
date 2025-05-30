export default function Content({ content }) {
  return (
    <div className="content-container">
      <img src={content.img} alt={content.title} />
      <span>모집중</span>
      <div>{content.title}</div>
      <p>{content.subtitle}</p>
    </div>
  );
}
