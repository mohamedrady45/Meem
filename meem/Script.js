var discount=0;
var totalC=0;

function minus(idx){
     var x=document.getElementsByClassName('quantity');
     var val=x[idx].innerHTML;

     if(val!=1)
        val--;
    
     x[idx].innerHTML=val;
     CalcTotal();
     calcAfterDiscount()
 }
function plus(idx){
    var x=document.getElementsByClassName('quantity');
    var val=x[idx].innerHTML;
    val++;
    //  console.log(val);
     x[idx].innerHTML=val;
     CalcTotal();
     calcAfterDiscount()
}
function loveClicked(idx){
    var pic=document.getElementsByClassName('itemLove');
    var redLove='./MyCartPage/pics/favorite_red.png';
    var whiteLove='./MyCartPage/pics/favorite_FILL0_wght400_GRAD0_opsz48.png'
    if(pic[idx].src.match(whiteLove))
        pic[idx].src=redLove;
    else 
        pic[idx].src=whiteLove;
}
function RemoveItem(idx){
    var item = document.getElementsByClassName('itemContainer');
    var price= document.getElementsByClassName('itemPrice')
    if(idx==-1)return -1;
    price[idx].innerHTML='0';
    item[idx].remove();
    var title=document.getElementById('CartQuantity');
    title.innerHTML=document.getElementsByClassName('itemContainer').length;
    CalcTotal();
    calcAfterDiscount()
}
function CalcTotal(){
    var prices=document.getElementsByClassName('itemPrice');
    var quant=document.getElementsByClassName('quantity');
    var total=0;
   //console.log(prices[0].innerHTML+' '+prices[1].innerHTML+' '+prices[2].innerHTML);
   //console.log(quant[0].innerHTML+' '+quant[1].innerHTML+' '+quant[2].innerHTML);
   
   for(let i=0;i<prices.length;i++){
        total+=(prices[i].innerHTML*quant[i].innerHTML);
        //console.log(total);
    }
    totalC=total;
    document.getElementById('totalCost').innerHTML=total;
}
function calcIdx(str){
    var cnt=-1
   // console.log(str+' ');
    var items=document.getElementsByClassName('itemtitle');
    //console.log(items);
    for(let i=0;i<items.length;i++){
      if(items[i].innerText==str)cnt=i;
   }
   //console.log(cnt);
   return cnt;
}
function CheckCoupon(){
    var cop=document.getElementById('couponInput');
    var out=document.getElementById('discount');
    var append=document.getElementsByClassName('totalCost');
    if(cop.value=='FCI'&& !discount){

        out.innerHTML='You got 15% Discont!';
        discount=.15;
        totalC=totalC-(totalC*discount);
        var top=document.createElement('div');
        top.className='TotalCost';
        top.innerText='After Discount';
        var innerTop=document.createElement('div');
        var spn=document.createElement('span');
        spn.innerText='EGP';
        var cost=document.createElement('div');
        cost.id='Cost';
        cost.innerText=totalC;
        innerTop.appendChild(spn);
        innerTop.appendChild(cost);
        top.appendChild(innerTop);
        insertAfter(document.getElementsByClassName('totalCost')[0],top);
        console.log(top);
    }
    else{
        out.style.margin='margin: 5px 10px 0px 123px';
        out.innerHTML='Not Valid';
    }
}
function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }
function calcAfterDiscount(){
    var x=document.getElementsByClassName('totalCost');
    x[1].remove();
    discount=0;
    CheckCoupon();

}