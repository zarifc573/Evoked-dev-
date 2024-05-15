import perfume from '@/public/assets/perfumeCollect.png'
import blue from '@/public/assets/blue.png'
import brown from '@/public/assets/brown.png'
const Links = [
    { id:'1', link: perfume, scent:'Scent 1', smell:'Smells Like Dior Sauvage (1)', ingredients:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, alias sit eum delectus itaque minima distinctio facere enim cumque accusamus!', notes:'Note1', gender:'Men', price:'$45' },
    { id:'2', link: blue, scent:'Scent 2', smell:'Smells Like Dior Sauvage (2)', ingredients:'Fragrance Oils, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, alias sit eum delectus itaque minima distinctio facere enim cumque accusamus!', notes:'Note2', gender:'Women', price:'$90' },
    { id:'3', link: blue, scent:'Scent 3', smell:'Smells Like Dior Sauvage (3)', ingredients:'Solvents, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, alias sit eum delectus itaque minima distinctio facere enim cumque accusamus!', notes:'Note3', gender:'Women', price:'$180' },
    { id:'4', link: brown, scent:'Scent 4', smell:'Smells Like Dior Sauvage (4)', ingredients:'Fixatives, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, alias sit eum delectus itaque minima distinctio facere enim cumque accusamus!', notes:'Note4', gender:'Unisex', price:'$30' },
    { id:'5', link: blue, scent:'Scent 5', smell:'Smells Like Dior Sauvage (5)', ingredients:'Modifiers, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, alias sit eum delectus itaque minima distinctio facere enim cumque accusamus!', notes:'Note5', gender:'Women', price:'$45' },
    { id:'6', link: perfume, scent:'Scent 6', smell:'Smells Like Dior Sauvage (6)', ingredients:'Diluents, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, alias sit eum delectus itaque minima distinctio facere enim cumque accusamus!', notes:'Note6', gender:'Men', price:'$95' },
    { id:'7', link: brown, scent:'Scent 7', smell:'Smells Like Dior Sauvage (7)', ingredients:'Colorants, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, alias sit eum delectus itaque minima distinctio facere enim cumque accusamus!', notes:'Note7', gender:'Unisex', price:'$65' },
  ];

  const MenProducts = Links.filter(product => product.gender === 'Men');
const WomenProducts = Links.filter(product => product.gender === 'Women');
const UnisexProducts = Links.filter(product => product.gender === 'Unisex');
const AllProducts = Links;
    
  export { Links, MenProducts, WomenProducts, UnisexProducts, AllProducts}