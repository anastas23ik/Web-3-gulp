const logo = {
  src: './assets/img/logo.svg',
  alt: 'exp',
};

const columns = [
  {
    title: 'Ссылки',
    items: [
      {
        href: '#',
        text: 'Овероны',
      },
      {
        href: '#',
        text: 'Соц. сети',
      },
      {
        href: '#',
        text: 'Счётчики',
      },
      {
        href: '#',
        text: 'Контакты',
      },
    ],
  },
  {
    title: 'Компания',
    items: [
      {
        href: '#',
        text: 'Условия использования'
      },
      {
        href: '#',
        text: 'Перс. данные'
      },
      {
        href: '#',
        text: 'Контакты'
      }
    ]
  },
  {
    title: 'Контакты',
    items: [
      {
        text: 'ул. Профессора Поздеева, 13, к.Г, Пермь'
      },
      {
        href: '#',
        text: '+7 (342) 2-198-520'
      },
      {
        href: '#',
        text: 'info@pstu.ru'
      }
    ]
  },
];


const footerData = {
  logo,
  header: 'Хотите Шагнуть в Будущее Раньше Других?',
  button: 'Запросить ранний доступ',
  address: `ул. Профессора Поздеева, 13, к.Г,
  Пермь, Пермский край, 614013
  Все права защищены`,
  columns
};

export default footerData;