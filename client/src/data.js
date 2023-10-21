import oysters from './assets/1.png'
import porkRibs from './assets/2.png'
import shrimps from './assets/3.png'
import burger from './assets/4.png'
import cake from './assets/8.png'

export const products = [
  {
    id: 1,
    title: 'Oysters Rockefeller',
    description: 'Plump and savory oysters bathed in a rich, herb-infused sauce, then baked to perfection. A classic delicacy with an exquisite blend of flavors.',
    price: '27.00 $',
    image: oysters
  },
  {
    id: 2,
    title: 'Grilled Pork Ribs with Greens',
    description: 'Delicious pork ribs grilled to perfection and served with a generous helping of fresh greens.',
    price: '16.00 $',
    image: porkRibs
  },
  {
    id: 3,
    title: 'King Prawns in Lemon Juice',
    description: 'Succulent king prawns prepared in zesty lemon juice for a burst of flavor.',
    price: '18.20 $',
    image: shrimps
  },
  {
    id: 4,
    title: 'Marble Beef Burger',
    description: 'A juicy burger made from the finest marble beef, creating an exquisite and flavorful experience.',
    price: '27.00 $',
    image: burger
  },
  {
    id: 5,
    title: 'Lobster Bisque',
    description: 'Indulge in the rich and creamy flavors of our signature lobster bisque, a delectable seafood soup that\'s simply divine.',
    price: '22.50 $',
    image: oysters
  },
  {
    id: 6,
    title: 'Sizzling Tandoori Chicken',
    description: 'A sizzling sensation! Tender and flavorful tandoori chicken, marinated in aromatic spices, served piping hot.',
    price: '15.50 $',
    image: porkRibs
  },
  {
    id: 7,
    title: 'Caprese Salad',
    description: 'A fresh and vibrant Caprese salad featuring ripe tomatoes, mozzarella cheese, and basil leaves drizzled with balsamic glaze.',
    price: '12.00 $',
    image: shrimps
  },
  {
    id: 8,
    title: 'Chocolate Lava Cake',
    description: 'Indulge your sweet tooth with our decadent chocolate lava cake, a warm and gooey treat that\'s pure bliss for chocolate lovers.',
    price: '8.50 $',
    image: cake
  }
];

// Export the products array for use in your application
export default products;
