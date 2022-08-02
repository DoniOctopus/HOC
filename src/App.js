import './App.css';
import data from './products.json'
import WithSearch from "./shared/WithSearch";
import ProductList from "./features/product/ProductList";
import LocalStorage from "./features/lcoalstorage/LocalStorage";

function App() {
    const ProductListForm = WithSearch(ProductList,data)
    return (
        <div>
            {/*<ProductListForm/>*/}
        <LocalStorage/>
        </div>
    );
}

export default App;
