const getRollNo = () => {
    setTimeout( () =>{
        console.log(`API getting roll no`);
        let roll_no = [1,2,3,4,5];
        console.log(roll_no)

        setTimeout( (roll_no) =>{
            const biodata = {
                name : "Rani",
                age : 18
            }
            console.log(`My roll no is ${roll_no} My name is ${biodata.name} and I am ${biodata.age} years old`)

            setTimeout( (name) =>{
                biodata.gender="fimale";
                console.log(`My roll no is ${roll_no} My name is ${biodata.name} and I am ${biodata.age} years old. I am an alpha ${biodata.gender}`)
            },2000,biodata.name);

        },2000,roll_no[1]);

    },2000);
}
getRollNo();
