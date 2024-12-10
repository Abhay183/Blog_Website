import logo from './logo.svg';
import { useState } from 'react';
import BlogList from './components/BlogList';
import Header from './components/Header';
import myimage from './images/flower.webp';
import Elaborate from './components/Elaborate';
import WriteBlog from './components/WriteBlog';
const App=()=> {

  const generateRandom=()=>{
    return Math.floor(Math.random() * 100) + 1;
   }
  const[mystate,setsta]=useState(false);
  const[image,setimage]=useState("");
  const[heade,sethead]=useState("");
  const[para,setpara]=useState("");
  const[real,setrael]=useState("");
  const[writ,setWrit]=useState(false);

   const handlechange=(image,header,paragraph,key,realpara)=>{
    setsta(true);
    setimage(image);
    sethead(header);
    setpara(paragraph);
    setrael(realpara);
   }

   const handledelete=()=>{
    setsta(false);
   }
   const handleWrite=()=>{
    setWrit(!writ)
   }

   
  const[newk,sek]=useState([])
   
   const handlenewform=(Header,Desc,imgurl,full)=>{
    const myobj=[]
      card.push({
        header:Header,
        image:imgurl,
        key:generateRandom(),
        shortline:Desc,
        paragraph:full
      })

      const nrr=card.concat(myobj)
     setacard(nrr)
     console.log(card)
     setWrit(false)
   }

  const [card,setacard]=useState([{
    header:"lorem epsium",
    image:require("./images/flower.webp"),
    key:generateRandom(),
    shortline:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis dolore fugiat quam et, nihil illo labore quidem repudiandae? Temporibus, praesentium!",
    paragraph:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora saepe doloribus repudiandae velit provident tenetur nesciunt recusandae ab officia cupiditate quidem ullam autem ipsam accusantium distinctio, eveniet nostrum dolores? Dicta ex itaque numquam possimus, fugit nihil accusamus est optio a eveniet sapiente porro animi delectus officia cum voluptatum maxime similique ad. Distinctio, aliquid natus cumque voluptate necessitatibus enim sed doloribus. Vero, voluptatem deleniti iure eius repudiandae quae esse eaque facere excepturi impedit harum. Consectetur consequuntur delectus praesentium reiciendis id pariatur tempora? Quam, similique. Quaerat quis voluptas laborum labore, obcaecati a consectetur quibusdam laboriosam ea atque sed beatae distinctio vel porro."
  },{
    header:"lorem epsiumjxzkjx",
    key:generateRandom(),
    image:require("./images/flower.webp"),
    shortline:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis dolore fugiat quam et, nihil illo labore quidem repudiandae? Temporibus, praesentium!",
    paragraph:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora saepe doloribus repudiandae velit provident tenetur nesciunt recusandae ab officia cupiditate quidem ullam autem ipsam accusantium distinctio, eveniet nostrum dolores? Dicta ex itaque numquam possimus, fugit nihil accusamus est optio a eveniet sapiente porro animi delectus officia cum voluptatum maxime similique ad. Distinctio, aliquid natus cumque voluptate necessitatibus enim sed doloribus. Vero, voluptatem deleniti iure eius repudiandae quae esse eaque facere excepturi impedit harum. Consectetur consequuntur delectus praesentium reiciendis id pariatur tempora? Quam, similique. Quaerat quis voluptas laborum labore, obcaecati a consectetur quibusdam laboriosam ea atque sed beatae distinctio vel porro."
  },{
    header:"lorem epsiumasjdnjsand",
    key:generateRandom(),
    image:require("./images/flower.webp"),
    shortline:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis dolore fugiat quam et, nihil illo labore quidem repudiandae? Temporibus, praesentium!",
    paragraph:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora saepe doloribus repudiandae velit provident tenetur nesciunt recusandae ab officia cupiditate quidem ullam autem ipsam accusantium distinctio, eveniet nostrum dolores? Dicta ex itaque numquam possimus, fugit nihil accusamus est optio a eveniet sapiente porro animi delectus officia cum voluptatum maxime similique ad. Distinctio, aliquid natus cumque voluptate necessitatibus enim sed doloribus. Vero, voluptatem deleniti iure eius repudiandae quae esse eaque facere excepturi impedit harum. Consectetur consequuntur delectus praesentium reiciendis id pariatur tempora? Quam, similique. Quaerat quis voluptas laborum labore, obcaecati a consectetur quibusdam laboriosam ea atque sed beatae distinctio vel porro."
  },{
    header:"lorem epsiumasdasd",
    key:generateRandom(),
    image:require("./images/flower.webp"),
    shortline:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis dolore fugiat quam et, nihil illo labore quidem repudiandae? Temporibus, praesentium!",
    paragraph:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora saepe doloribus repudiandae velit provident tenetur nesciunt recusandae ab officia cupiditate quidem ullam autem ipsam accusantium distinctio, eveniet nostrum dolores? Dicta ex itaque numquam possimus, fugit nihil accusamus est optio a eveniet sapiente porro animi delectus officia cum voluptatum maxime similique ad. Distinctio, aliquid natus cumque voluptate necessitatibus enim sed doloribus. Vero, voluptatem deleniti iure eius repudiandae quae esse eaque facere excepturi impedit harum. Consectetur consequuntur delectus praesentium reiciendis id pariatur tempora? Quam, similique. Quaerat quis voluptas laborum labore, obcaecati a consectetur quibusdam laboriosam ea atque sed beatae distinctio vel porro."
  },{
    header:"lorem epsiumasdasd",
    key:generateRandom(),
    image:require("./images/flower.webp"),
    shortline:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis dolore fugiat quam et, nihil illo labore quidem repudiandae? Temporibus, praesentium!",
    paragraph:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora saepe doloribus repudiandae velit provident tenetur nesciunt recusandae ab officia cupiditate quidem ullam autem ipsam accusantium distinctio, eveniet nostrum dolores? Dicta ex itaque numquam possimus, fugit nihil accusamus est optio a eveniet sapiente porro animi delectus officia cum voluptatum maxime similique ad. Distinctio, aliquid natus cumque voluptate necessitatibus enim sed doloribus. Vero, voluptatem deleniti iure eius repudiandae quae esse eaque facere excepturi impedit harum. Consectetur consequuntur delectus praesentium reiciendis id pariatur tempora? Quam, similique. Quaerat quis voluptas laborum labore, obcaecati a consectetur quibusdam laboriosam ea atque sed beatae distinctio vel porro."
  }])


  return(
    <div className='container-fluid'>
     <Header label="My Blogs"/>
     <div>
      <button onClick={handleWrite}>Write your Own Blog</button>
     </div>
     {writ?<WriteBlog functi={handlenewform} />:null}
     {mystate?<Elaborate image={image} para={para} heade={heade} realpara={real} handledelete={handledelete}/>:null}
     {!mystate?<BlogList card={card} func={handlechange}/>:null}

     </div>
  );
}

export default App;
