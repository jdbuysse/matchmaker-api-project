import React from 'react';

function LineCard({selectedLine, data}){
    return(
        <div className='line-card'>
            <p></p>
            <div className='title'><a href={data.URL}>{data.title}</a></div>
            <div className='source'>{data.author}, {data.journal}, {data.year}, {data.pages}</div> 
            <div className='doc-buttons'>
                <a href="" class="button-download-pdf">Download PDF</a>
            </div>
            <div className='chunk'>
                The last eight lines of W. H. Auden's "Musee des Beaux Arts" (Another Time, New York, 1940, p. 34) derive from a viewing of Bruegel's The Fall of Icarus, a painting in the collection of the Brussels Musee Royaux des Beaux Arts: In Breughel's Icarus, for instance: how everything turns away Quite leisurely from tlhe disaster; the ploughman may Have heard the splash, the forsaken cry, But for him it was not an important failure; the sun shone As it had to on the white legs disappearing into the green Water; and the expensive delicate ship that must have seen Something amazing, a boy falling out of the sky, Had somewhere else to get to and sailed calmly on. These details instance a generalization with which the poem begins: "About suffering they were never wrong / The Old Masters; how well they understood / Its human position" as an experience commonly occurring in the midst of human indifference.
            </div>
            {/* //journal, date, pages */}
        </div>
    )
}

export default LineCard;

