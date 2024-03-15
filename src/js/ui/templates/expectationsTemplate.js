export const expectationsImageTemplate = ({ image: { src, alt } }) => {
  return `
    <div class="exceeding_all_expectations__left">
      <img src="${src}" alt="${alt}" />
    </div>
  `;
};

export const expectationsRightTemplate = ({
  link: { href, text },
  header,
  content
}) => {
  return `
    <a href="${href}" class="top__cta">${text}</a>
    <h2>${header}</h2>
    <p>${content}</p>
    <a href="${href}" class="bottom__cta">${text}</a>
  `;
};

export const expectationsTemplate = (data) => {
  const imageTemplate = expectationsImageTemplate(data);
  const rightTemplate = expectationsRightTemplate(data);

  return `
    <div class="exceeding_all_expectations__left">
      ${imageTemplate}
    </div>
    <div class="exceeding_all_expectations__right">
      ${rightTemplate}
    </div>
  `;
};
