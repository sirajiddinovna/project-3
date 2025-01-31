import express from "express";

const app = express();
const port = 3000;

/* Write your code here:
1-qadam: Bosh sahifani (index.ejs) "/" yo‘nalishida render qiling.
2-qadam: Statik fayllar bog‘langanligiga ishonch hosil qiling va CSS ko‘rinishini tekshiring.
3-qadam: "About" va "Contact" sahifalarini render qilish uchun route qo‘shing.
Maslahat: "header.ejs" dagi navbar tugmalarining href qiymatlarini tekshiring.
4-qadam: "About" va "Contact" sahifalariga header va footer qismlarini qo‘shish uchun partiallardan foydalaning. */


app.use(express.static('public'))

app.get('/', (req, res)=>{
  res.render('index.ejs')
})


app.get('/about', (req, res)=>{
	res.render('about.ejs')
  })
  
app.get('/contact', (req, res)=>{
	res.render('contact.ejs')
  })

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});