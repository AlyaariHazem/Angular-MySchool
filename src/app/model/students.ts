export interface Students {
    id: string,
    fname: string,
    fnameE: string,
    SnameE: string,
    Sname: string,
    TnameE: string,
    Tname: string,
    Lname: string,
    LnameE: string,
    parantEmail: string,
    class:string,
    depart:string,
    PlacePD: number,
    grade:number,
    ContryNum: string,
    PirthDate:number,
    six: string,
    country:string,
    section:string,
    city:string,
    phone:number,
    isActive:boolean
}
// studentList:Students[]=[];
// studentObject:Students={
//   id: '',
//   fname: '',
//   fnameE: '',
//   SnameE: '',
//   Sname: '',
//   TnameE: '',
//   Tname: '',
//   Lname: '',
//   LnameE: '',
//   email: '',
//   class: '',
//   depart: '',
//   PlacePD: 0,
//   grade: 0,
//   ContryNum: '',
//   PirthDate: 0,
//   six: '',
//   country: '',
//   section: '',
//   city: '',
//   phone: 0,
//   isActive: false
// };
// id: string='';
// fname: string='';
// fnameE: string='';
// SnameE: string='';
// Sname: string='';
// TnameE: string='';
// Tname: string='';
// Lname: string='';
// LnameE: string='';
// email: string='';
// class:string='';
// depart:string='';
// PlacePD: number=0;
// grade: number=0;
// ContryNum: string='';
// PirthDate:number=0;
// six: string='';
// country:string='';
// section:string='';
// city:string='';
// phone:number=0;
// isActive:boolean=false;

// getAllStudents(){
//   this.data.getAllStudents().subscribe(res =>{
//   this.studentList=res.map((e: any)=>{
//     const data=e.payload.doc.data();
//     data.id=e.payload.doc.id;
//     return data;
//   })
//   })
// }
// addStudent(){
// this.studentObject.id='';
// this.studentObject.ContryNum=this.ContryNum;
// this.studentObject.fname=this.fname;
// this.studentObject.fnameE=this.fnameE;
// this.studentObject.Sname=this.Sname;
// this.studentObject.SnameE=this.SnameE;
// this.studentObject.Tname=this.Tname;
// this.studentObject.Lname=this.Lname;
// this.studentObject.LnameE=this.LnameE;
// this.studentObject.section=this.section;
// this.studentObject.phone=this.phone;
// this.studentObject.ContryNum=this.ContryNum;
// this.studentObject.city=this.city;
// this.studentObject.class=this.class;
// this.studentObject.country=this.country;
// this.studentObject.isActive=this.isActive;
// this.studentObject.email=this.email;
// this.studentObject.PirthDate=this.PirthDate;
// this.studentObject.PlacePD=this.PlacePD;
// this.studentObject.email=this.email;
// this.studentObject.six=this.six;
// this.studentObject.depart=this.depart;
// this.data.addStudent(this.studentObject);
// }