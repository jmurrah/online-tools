type ListProps = {
  title: string;
  urls: string[];
};

function List({ title, urls }: ListProps) {
  return (
    <div className="flex flex-col">
      <h2>{title}</h2>
      <ul>
        {urls.map((url) => (
          <li key={url}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {url}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
