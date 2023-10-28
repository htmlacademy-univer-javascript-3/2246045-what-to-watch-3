export type Review = {
    FilmId: string;
    Comment: string;
    Author: string;
    PubDate: string;
    Rating: string;
}

export type Reviews = Review[];

export const reviews: Review[] = [
  {
    FilmId:'',
    Comment: "Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed films in years.",
    Author: 'Kate Muir',
    PubDate: 'December 24, 2016',
    Rating: '8,9',
  },
  {
    FilmId:'',
    Comment: "Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. 'The Grand Budapest Hotel' is no different, except that he has added a hint of gravitas to the mix, improving the recipe.",
    Author: 'Bill Goodykoontz',
    PubDate: 'November 18, 2015',
    Rating: '8,0',
  },
  {
    FilmId:'',
    Comment: "I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.",
    Author: 'Amanda Greever',
    PubDate: 'November 18, 2015',
    Rating: '8,0',
  },
  {
    FilmId:'',
    Comment: 'The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.',
    Author: 'Matthew Lickona',
    PubDate: 'December 20, 2016',
    Rating: '7,2',
  },
  {
    FilmId:'',
    Comment: 'It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.',
    Author: 'Paula Fleri-Soler',
    PubDate: 'December 20, 2016',
    Rating: '7,6',
  },
  {
    FilmId:'',
    Comment: 'It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.',
    Author: 'Paula Fleri-Soler',
    PubDate: 'December 20, 2016',
    Rating: '7,0',
  }
];
