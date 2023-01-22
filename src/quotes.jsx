/*
- absolute power corrupts absolutely\

- i have naturally sourced slugs in my bathroom
- i must always wear socks, but if they're twisted? even a little? hell.
- was the sky not blue before we invented the word?
- great minds think alike, but fools rarely differ
- "and I love YOU, random citizen!" from Megamind
*/

import React from 'react';

// function RecipeTitle() {
//     const title = "mashed potatoes";
//     return (
//         <h2>{ title }</h2>
//     )
// };
// export default RecipeTitle;
function Quotes() {
    const quotesArr = ["- absolute power corrupts absolutely ", "- i have naturally sourced slugs in my bathroom ", "- i must always wear socks, but if they're twisted? even a little? hell. ", "- was the sky not blue before we invented the word? ", "- great minds think alike, but fools rarely differ ", '- "and I love YOU, random citizen!" from Megamind ', "- u cud totally hide some centipedes in that "]
    return (
        <ul>
            <li>{ quotesArr[0] }</li>
            <li>{ quotesArr[1] }</li>
            <li>{ quotesArr[2] }</li>
            <li>{ quotesArr[3] }</li>
            <li>{ quotesArr[4] }</li>
            <li>{ quotesArr[5] }</li>
            <li>{ quotesArr[6] }</li>
        </ul>
    )
}
export default Quotes;