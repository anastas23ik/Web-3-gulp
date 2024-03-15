export const possibilitiesTemplate = ({
  link: { href, text },
  button,
  title
}) => {
  return `
    <a href="${href}" class="limitless_possibilities__cta">${text}</a>
    <div class="limitless_possibilities__middle">
      <h3>${title}</h3>
      <button class="btn">${button}</button>
    </div>
  `;
};