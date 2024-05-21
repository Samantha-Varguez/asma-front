import Tabs from "./Tabs";
import './Tabs.css';
import MultipleSelectionList from "../Selector/MultipleSelectionList";
import Nosotros from "../Nosotros/Nosotros"
import Contacto from "../Contacto/Contacto";

export default function TabTest(){

const tabs = [
    {
      label : 'Inicio',
      content :  <MultipleSelectionList/>
    }, 
    {
        label : 'Nosotros',
        content :  <Nosotros/>
    }, 
    {
        label : 'Contacto',
        content : <Contacto/>
    }, 
    
]

function handleChange(currentTabIndex){
}

    return <Tabs tabsContent={tabs} onChange={handleChange}/>
}