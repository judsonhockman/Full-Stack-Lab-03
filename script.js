
var friends = ["Jack", "Steven", "Stan", "Rick", "Russ"];
// console.log(friends[0]);
// var para = document.createElement('my-btn');
// var text = document.createTextNode('Hello World!');
// para.appendChild(text);

function sing() {
    for (var i = 0; i < friends.length; i++) {
        // console.log(friends[i].toUpperCase() + ":");
        // var div = div.class friend h3 friend(i)
        //  <div id="friend">h3</div>
        // Create a div in code, store in variable called div
        var div = document.createElement('div');
        // Sets the class name of the newly created div to be "friend" e.g. <div class="friend"></div>
        div.className = "friend";

        // creating an h3 and storing in variable called heading
        var heading = document.createElement('h3');
        // creating a text node (container) that contains our "current friend"'s name, store in variable headingText
        var headingText = document.createTextNode(friends[i]);

        // Add the text container as a child of the h3 (sets the text of the h3)
        heading.appendChild(headingText);

        // Then, add the h3 (that now has text inside it) to the div we created earlier
        div.appendChild(heading);

        for (var j = 99; j > 0; j--) {
            // in here, j is first 99, then it will be 98, then it will be 97
            // check as you go along. start with consoling just 'j'
            if (j > 2) {

                // create a paragraph
                var para = document.createElement('p');

                // then create text for the paragraph
                var paraText = document.createTextNode(j + " lines of code in the file, " + j + " lines of code, " + friends[i] + " strikes one out, clears it all out, " + (j - 1) + " lines of code in the file.");

                // then add that text to the paragraph
                para.appendChild(paraText);

                // then add that paragraph to the div from above
                div.appendChild(para);
                // console.log();


            } else if (j === 2) {
                //  console.log(j + " lines of code in the file, " + j + " lines of code, " + friends[i] + " strikes one out, clears it all out, " + (j - 1) + " line of code in the file.");
                var para = document.createElement('p');
                var paraText = document.createTextNode(j + " lines of code in the file, " + j + " lines of code, " + friends[i] + " strikes one out, clears it all out, " + (j - 1) + " line of code in the file.");
                para.appendChild(paraText);
                div.appendChild(para);
            } else {
                //console.log("1 line of code in the file, 1 line of code, " + friends[i] + " strikes one out, clears it all out, no lines of code in the file.");
                var para = document.createElement('p');
                var paraText = document.createTextNode("1 line of code in the file, 1 line of code, " + friends[i] + " strikes one out, clears it all out, no lines of code in the file.");
                para.appendChild(paraText);
                div.appendChild(para);
            }

        }
        // at this point, we have created a div for our "current friend", added an h3 for their name
        // and added 99 paragraphs singing the song
        // Now, we need to add the div to the document body
        document.body.appendChild(div);

    }
}
document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('sing-button');
    btn.addEventListener('click', sing);
});
// var btn = document.getElementById('sing-button');
// btn.addEventListener('click', function() {
    // sing();



