  function minNumber(nums1, nums2) {
    
    

  let  numse1=nums1.length
  let numse2=nums2.length
  let sum1=numse1+numse2

    let k=0;
    let m=0;
    let c;
    let sum=[]
    let len=0
    let o=0

    for(i=0;i<sum1+1;i++){
        if(i<nums1.length){
            sum[len]=nums1[i]
            len++


        }else if(i>nums1.length){
            sum[len]=nums2[o]
            len++
            o++
        }
    }
    console.log(sum)

  











  for(i=0;i<nums1.length;i++){
    if(i===0){
        k=nums1[i]
    }
    
        if(k>nums1[i]){
            k=nums1[i]
        }
        
        
    }

    for(i=0;i>nums2.length;i++){
        if(i===0){
            m=numse2[i];
        }
        if(m>nums2[i]){
            m=nums2[i]
        }
    }
        
        
        





         
        c=`${k}`
        c+=`${m}`
        console.log(c)
        return c
        

    }

let num1=[4,1,3]
let num2=[5,7]
 console.log(minNumber(num1,num2)) 


