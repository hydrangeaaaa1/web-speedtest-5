// قم بإنشاء الدالة التالية

/*
 * greet(name) اسم الدالة
 * - name قد تستقبل وقد لا تستقبل
 * - name إن لم تستقبل اسم أو "Hello" تطبع
 * - name إن استقبلت اسم أو "Hello <name>" تطبع
 */
let name = prompt("enter your name");
greet(name);
function greet(name) 
{
    if (name == "")
    {
        alert(`Hello`)
    }else {
       
        alert(`Hello ${name}`)
    }

}
