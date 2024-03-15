export const blogItemTemplate = ({
  img: { src, alt },
  date,
  title,
  link: { href, text }
}) => {
  return `
    <div class="blog_grid_container"> 
      <div class="">
        <img src="${src}" alt="${alt}" />
      </div>
      <div class="blog-content">
        <div>
        <h6>${date}</h6>
        <h3>${title}</h3>
        </div>
        <a href="${href}" class="">${text}</a>
      </div>
    </div>
  `;
};

export const blogTemplate = ({
  items
}) => {
  const itemsTpl = items
    .map(item => blogItemTemplate(item))
    .join("");

  return `
    <h1>Многое Происходит,<br>
    Мы Ведем об Этом Блог.</h1>
    <div class="blog_containers">
      ${itemsTpl}
    </div>
  `;
};