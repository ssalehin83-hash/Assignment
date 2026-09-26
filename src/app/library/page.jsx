import React from 'react';
import LibraryCard from '../components/LibraryCard';

const getData = async () => {
       const res=await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data=await res.json();
    return data};

const LibraryPage = async() => {
    const loadData = await getData();
 
    return( 
      <section>
          Library
              {
                loadData.map((item) => {
                 return <div key={item.id} card={item}>
                    <LibraryCard></LibraryCard>
                 </div> 
                }  
                )  
                }


      </section>
    );
};

export default LibraryPage;