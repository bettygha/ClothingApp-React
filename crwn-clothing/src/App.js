import { Routes, Route , Outlet} from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Authentication from './routes/authentication/authentication.component';
// import CategoryItem from './component/category-item/category-item.component';
import CheckoutItem from './component/checkout-item/checkout-item.component';
import Checkout from './routes/checkout/checkout.component';
import Shop from './routes/shop/shop.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path ='auth' element={<Authentication/>}/>
        <Route path='checkout' element = {<Checkout/>}/>
      </Route>
    </Routes>
  );

};


export default App;
