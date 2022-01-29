import React, {useState} from 'react';

const Tabs = props => {

    const [tab, setTab] = useState([]);
    const [currentTab, setCurrentTab] = useState(0);
    const [tabList, setTabList] = useState([]);

    const addTab = (e) => {
        e.preventDefault();
        const newTab = ['H', 'O', 'L', 'O', '!'];
        setTabList([...tabList, newTab]);
    }

    return ( <div>

        <h3>Tab {currentTab}</h3>
        { tabList.map( (item, i) =>{

            return <div style = {{ height: 100, backgroundColor: 'grey', margin: 5, borderRadius: 10 }}>
            {   tab.map( (item, i) =>{
                    return <div>{ item }</div>
                })
            }
                </div>

            })
        } </div>)
}

export default Tabs