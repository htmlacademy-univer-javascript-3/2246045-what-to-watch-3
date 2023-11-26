export type Review = {
  id: string
  date: string
  user: string
  comment: string
  rating: number
}

export type Reviews = Review[];

export const reviews: Review[] = [
  {
    id:'',
    comment: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director"s funniest and most exquisitely designed films in years.',
    user: 'Kate Muir',
    date: 'December 24, 2016',
    rating: 8.9,
  },
  {
    id:'',
    comment: 'Anderson"s films are too precious for some, but for those of us willing to lose ourselves in them, they"re a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.',
    user: 'Bill Goodykoontz',
    date: 'November 18, 2015',
    rating: 8.0,
  },
  {
    id:'',
    comment: 'I didn"t find it amusing, and while I can appreciate the creativity, it"s an hour and 40 minutes I wish I could take back.',
    user: 'Amanda Greever',
    date: 'November 18, 2015',
    rating: 8.0,
  },
  {
    id:'',
    comment: 'The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.',
    user: 'Matthew Lickona',
    date: 'December 20, 2016',
    rating: 7.2,
  },
  {
    id:'',
    comment: 'It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.',
    user: 'Paula Fleri-Soler',
    date: 'December 20, 2016',
    rating: 7.6,
  },
  {
    id:'',
    comment: 'It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.',
    user: 'Paula Fleri-Soler',
    date: 'December 20, 2016',
    rating: 7.0,
  }
];
