// #1) Men and the Hats

// Inside of a dark closet are five hats: three green and two red. Knowing this, three smart men go into the closet, and each selects a hat in the dark and places it unseen upon his head.

// Once outside the closet, no man can see his own hat. The first man looks at the other two, thinks, and says, "I cannot tell what color my hat is." The second man hears this, looks at the other two, and says, "I cannot tell what color my hat is either." The third man is blind. The blind man says, "Well, I know what color my hat is." What color is his hat? 

let red = true
let green = false

let man1 = Math.round(Math.random())
let man2 = Math.round(Math.random())
let man3 = Math.round(Math.random())

console.log(man1,man2,man3)

function hats() {

    console.log("")
    if ( man3 == red && man2 == red) {
        console.log("Man 1 says I have a green hat.")
        return true
    }

    if ( man3 == red && man1 == red) {
        console.log("Man 2 says I have a green hat.")
        return true
    }
    
    console.log("Man 3 says I have a green hat.")
    return false
}

hats()

// if (hats())
//     console.log("The blind man says, 'My hat is red.'")
// else console.log("The blind man says, 'My hat is green.'")

    
// #2) Figuring out the Money!

// Three Employees want to know the average of their salaries. They are not allowed to share their individual salaries.
// They cannot directly share their own salaries in anyway, which includes writing things down.