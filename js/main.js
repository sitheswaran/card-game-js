	
let findBox=document.getElementById("find-box");

findBox.innerText= Math.ceil(Math.random()* 5);

let choicesEle=document.getElementById("choices");
let array=[];
for (i=0;i<5;i++){

	let chooseEle=document.createElement("div");
	chooseEle.setAttribute("class","choose");
	
	let slideEle=document.createElement("div");
	let x=1;
	while(x==1){
		
		let num= Math.ceil(Math.random()*5);
		
		for(i=0;i<array.length;i++)
		{
			if(num==array[i])
			{
				num=0;
			}
		}
		if(num!=0)
		{
			array.push(num)
			chooseEle.innerText=num;
			chooseEle.setAttribute("id",num);
			slideEle.setAttribute("id","slide"+num);
			slideEle.setAttribute("class","slide");
			chooseEle.addEventListener("click", check);
			x=0;
		
		}		
	}
	chooseEle.appendChild(slideEle);
	choicesEle.appendChild(chooseEle);
}
document.getElementById("right").style.visibility="hidden";
document.getElementById("wrong").style.visibility="hidden";
function check(){	

	let x=document.getElementById("slide"+this.innerText);
		x.style.opacity="0";
	
	if(this.innerText == findBox.innerText){
		document.getElementById("right").style.visibility="visible";
	}
	else{
		document.getElementById("wrong").style.visibility="visible";
	}
}
	
	
