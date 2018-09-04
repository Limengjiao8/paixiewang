function obj(ar){
	//alert(123);
	if(!ar.id){return false};
	this.id=ar.id;
	this.sd=ar.sd || 10;
	this.sd2=this.sd/10;
	this.fx=ar.fx || "left";
	this.box=document.getElementById(this.id);
	//alert(this.box);
	this.show=function(){	
		if(this.fx=="left"){
			this.box.style.left=this.box.offsetLeft+this.sd2+"px";
		}else{
			this.box.style.left=this.box.offsetLeft-this.sd2+"px";
		}	
		
	}
	setInterval(this.show.bind(this),this.sd)
	//return this.show();
}