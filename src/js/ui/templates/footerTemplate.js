export const footerHeroTemplate = ({ header, button }) => {
  return `
    <h1>${header}</h1>
    <button class="btn">${button}</button>
  `;
};

export const footerLogoTemplate = ({
  logo: { src, alt },
  address
}) => {
  return `
    <div class="footer_item_logo">
      <img src="${src}" alt="${alt}" />
      <p>${address}</p>
    </div>
  `;
};

export const footerColumnItemTemplate = ({ href, text }) => {
  return `
    <a href="${href || ''}" class="">${text}</a>
  `;
};

export const footerColumnTemplate = ({ title, items }) => {
  const itemsTpl = items
    .map(item => footerColumnItemTemplate(item))
    .join("");

  return `
    <div class="footer_item">
      <p>${title}</p>
      ${itemsTpl}
    </div>
  `;
};


export const footerTemplate = ({
  logo,
  header,
  button,
  address,
  columns
}) => {
  const footerHeroTpl = footerHeroTemplate({ header, button });
  const logoTpl = footerLogoTemplate({ logo, address });
  const footerColumnsTpl = columns
    .map(col => footerColumnTemplate(col))
    .join("");

  return `
    ${footerHeroTpl}
    <footer class="footer">
      ${logoTpl}
      <div class="footer_items">
        ${footerColumnsTpl}
      </div>
    </footer>
  `;
};