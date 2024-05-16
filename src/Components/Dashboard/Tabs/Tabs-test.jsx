import Tabs from "./Tabs";
import './Tabs.css';
import MultipleSelectionList from "../Selector/MultipleSelectionList";

function RandomComponent(){
    return <h1>Some random content</h1>
}

export default function TabTest(){

const tabs = [
    {
      label : 'Inicio',
      content :  <div> This is content for tab 1</div>
    }, 
    {
        label : 'Nosotros',
        content :  <div> This is content for tab 2</div>
    }, 
    {
        label : 'Contacto',
        content :  <MultipleSelectionList/>
    }, 
    
]

function handleChange(currentTabIndex){
    console.log(currentTabIndex);
}

    return <Tabs tabsContent={tabs} onChange={handleChange}/>
}