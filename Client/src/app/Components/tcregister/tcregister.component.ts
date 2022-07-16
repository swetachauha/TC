import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup ,FormControl} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-tcregister',
  templateUrl: './tcregister.component.html',
  styleUrls: ['./tcregister.component.css']
})
export class TCRegisterComponent implements OnInit {

  public TCForm!:FormGroup;
  today=new Date();
  todayDate:any;
  file : File | undefined ;
  imageSrc='../TC_image';

  constructor(private formBuilder:FormBuilder,private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
 
    
    this.placeholderDate();

    this.TCForm=this.formBuilder.group({
      studentName:[''],
      fatherName:[''],
      motherName:[''],
      DOB:[''],
      class:[''],
      TC_No:[''],
      session:[''],
      admission_No:[''],
      uploadDocument: [null]
    });
  }
  placeholderDate()
  {
    var date:any=new Date();
    var todayDate:any=date.getDate();
    var month:any=date.getMonth()+1;
    var year:any=date.getFullYear();

    if(todayDate<10)
    {
      todayDate='0'+todayDate;
    }
    if(month<10)
    {
      month='0'+month;
    }
    // this.maxDate=year+"-"+month+"-"+todayDate;
    this.todayDate=todayDate+"/"+month+"/"+year;

    console.log("today",this.todayDate);
  }

  selectFile(event:any)
  {
    this.file=<File>event.target.files[0];
    console.log("file",this.file);
    // if(event.target.files[0])
    // {
    //   let reader=new FileReader();
    //   reader.readAsDataURL(event.target.files[0]);
    //   reader.onload=(event:any)=>{
    //     this.imageSrc=event.target.result;
    //   }
    }

  // submit()
  // {
  //   var myFormData = new FormData();
  //   const headers = new HttpHeaders();
  //   headers.append('Content-Type', 'multipart/form-data');
  //   headers.append('Accept', 'application/json');
  //   myFormData.append('image', this.file);
  //   /* Image Post Request */
  //   this.http.post('http://localhost:3333/TC', myFormData, {
  //   headers: headers
  //   }).subscribe(data => {
  //    //Check success message
  //    console.log(data);
  //   });  
  // }

submit()
{
  var jsonpresent:any;
  this.http.get<any>("http://localhost:3333/TC").subscribe((res: any[])=>{
       const tc=res.find((a:any)=>{
        console.log("tcno",a.TC_No);
        a.TC_No===this.TCForm.value.TC_No
        jsonpresent=a.TC_No;
       
     });
     if(!this.TCForm.value.studentName || !this.TCForm.value.fatherName || !this.TCForm.value.motherName || !this.TCForm.value.class || !this.TCForm.value.DOB || !this.TCForm.value.TC_No || !this.TCForm.value.session  || this.TCForm.value.admissionNo)
     {
       alert("Please fill all the fields");
       
     }
     else if(!this.file?.name)
     {
      alert("Please upload TC");
     }
            else if(jsonpresent===this.TCForm.value.TC_No)
            {
             alert("TC No already present ");
             
            }
            else  if (jsonpresent!==this.TCForm.value.TC_No){
              const endpoint = '../TC_image';
             let uploadDocument=new FormData();
              const image=uploadDocument.append("file",this.file,this.file.name);
              console.log("image",image);

             var data={
              'studentNAme':this.TCForm.value.studentName,
              'fatherName':this.TCForm.value.fatherName,
              'motherName':this.TCForm.value.motherName,
              'DOB':this.TCForm.value.DOB,
              'class':this.TCForm.value.class,
              'TC_No':this.TCForm.value.TC_No,
              'session':this.TCForm.value.session,
              'admission_No':this.TCForm.value.admission_No,
              'uploadDocument':'../TC_image/'+this.file?.name,
              // 'uploadDocument':uploadDocument,
              'TC_Date':this.todayDate
             }
            
             this.http.post<any>("http://localhost:3333/TC",data).subscribe(res=>{ 
              console.log("res",res);
               alert("submitted");
               this.TCForm.reset();
             })
           }
    })
 
 
}

}
