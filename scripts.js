const hello = document.getElementById("hello");
console.log(hello);
function greetings()
{
alert("hello!");
hello.textContent = "goodbye";
}
hello.addEventListener("click", greetings);
