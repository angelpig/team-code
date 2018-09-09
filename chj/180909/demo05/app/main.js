require('./index.css');
require('./app.scss');
import {printName,printSex} from './unitl';
import _ from 'lodash';

printName();
window.onload=function(){
    console.log('sdfsdf')
document.getElementById('click').onclick = function(){
    console.log('click')
    // require.ensure([],function(require){
    //     var _Class=require('./class.js');
    //     const appleModel = new _Class.Apple({
    //                 model: 'X'
    //               }).getModel()
    //               console.log('aaaa')
    //               console.log(appleModel)
    // },'cli')
    import(/* webpackChunkName: "class" */ './class').then((_Class) => { 
        const appleModel = new _Class.Apple({
            model: 'X'
          }).getModel()
          console.log('aaaa')
          console.log(appleModel)
      })
}
 
};




// setTimeout(()=>{
//     console.log('--------------------')
//     import(/* webpackChunkName: "class" */ './class').then((Apple,Person) => { 
//         const appleModel = new Apple({
//             model: 'X'
//           }).getModel()
//           console.log('aaaa')
//           console.log(appleModel)
//       })
// },1000)
