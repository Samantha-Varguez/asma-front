import Tabs from "./Tabs";
import './Tabs.css';
import MultipleSelectionList from "../Selector/MultipleSelectionList";


export default function TabTest(){

const tabs = [
    {
      label : 'Inicio',
      content :  <MultipleSelectionList/>
    }, 
    {
        label : 'Nosotros',
        content :  <div> This is content for tab 2</div>
    }, 
    {
        label : 'Contacto',
        content :   <div> This is content for tab 3 </div>
    }, 
    
]

function handleChange(currentTabIndex){
    console.log(currentTabIndex);
}

    return <Tabs tabsContent={tabs} onChange={handleChange}/>
}