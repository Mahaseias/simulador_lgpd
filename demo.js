const PROFILES = Object.freeze([1,2,3].map(n=>Object.freeze({name:'Visitante de demonstração '+n,email:'mundosenaivisitante'+n+'@gmail.com'})));
function demoProfileIndex(email){return PROFILES.findIndex(p=>p.email===email.trim().toLowerCase());}
// This is a public, browser-only educational check, not real authentication.
// Never use this demo password to protect a real account.
async function validDemoPassword(value){
  const bytes=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(value));
  const digest=Array.from(new Uint8Array(bytes),x=>x.toString(16).padStart(2,'0')).join('');
  return digest==='50cdb338860da68107df382869726b8e7b22c4aaa6f0f763d55a22f8fd17f83c';
}
