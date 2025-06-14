// templates.js

// Define your three templates here.
// You can later replace the placeholder comments with your own template code.
const templates = {
  "1": `
*oosango*iframe frameborder*ooseq**oosap*0*oosap* style*ooseq**oosap*position*ooscol* absolute*oosscol* top*ooscol* 0*oosscol* left*ooscol* 0*oosscol* border*ooscol* none*oosscol* height*ooscol* 100%*oosscol* width*ooscol* 100%*oosscol**oosap* src*ooseq**oosap*PUTYOURWEBSITEURLHERE*oosap**oosangc**oosango**oosfsl*iframe*oosangc*
`.trim(),

  "2": `
*oosango*!-- Inter font --*oosangc*
*oosango*link href*ooseq**oosqu*https*ooscol**oosfsl**oosfsl*fonts.googleapis.com*oosfsl*css2?family*ooseq*Inter*ooscol*wght@400*oosscol*600&display*ooseq*swap*oosqu* rel*ooseq**oosqu*stylesheet*oosqu**oosangc*

*oosango*!-- Styles --*oosangc*
*oosango*style*oosangc*
  body *oosbrco*
    font-family*ooscol* *oosap*Inter*oosap**ooscom* sans-serif*oosscol*
text-align*ooscol* center*oosscol*
  *oosbrcc*
  .btn *oosbrco*
    padding*ooscol* 14px 22px*oosscol*
    border*ooscol* none*oosscol*
    border-radius*ooscol* 24px*oosscol*
    margin*ooscol* 10px*oosscol*
    cursor*ooscol* pointer*oosscol*
    font-size*ooscol* 16px*oosscol*
    font-weight*ooscol* 500*oosscol*
    font-family*ooscol* inherit*oosscol*
transition*ooscol* 0.2s ease*oosscol*
  *oosbrcc*

.btn*ooscol*hover *oosbrco*
background*ooscol* #a8c3f0*oosscol*
transition*ooscol* 0.2s ease*oosscol*
*oosbrcc*
  .btn-remove *oosbrco*
    background*ooscol* #cccccc*oosscol*
    color*ooscol* #333*oosscol*
  *oosbrcc*
  .btn-remove*ooscol*hover *oosbrco*
    background*ooscol* #f0b2a8*oosscol*
    color*ooscol* #333*oosscol*
  *oosbrcc*
  .btn-apply *oosbrco*
    background*ooscol* #4285f4*oosscol*
    color*ooscol* white*oosscol*
  *oosbrcc*
  .btn-character *oosbrco*
    background*ooscol* #7daafc*oosscol*
    color*ooscol* white*oosscol*
margin*ooscol* 0px*oosscol*
padding*ooscol* 7px 22px*oosscol*
  *oosbrcc*

  #codeContainer *oosbrco*
background*ooscol*rgba*oospao*240*ooscom* 240*ooscom* 240*ooscom* 1*oospac**oosscol*
backdrop-filter*ooscol* saturate*oospao*100%*oospac* blur*oospao*14px*oospac**oosscol*
*oosbrcc*

  .toast *oosbrco*
    position*ooscol* fixed*oosscol*
font-family*ooscol* *oosap*Inter*oosap**ooscom* sans-serif*oosscol*
    bottom*ooscol* 30px*oosscol*
    left*ooscol* 50%*oosscol*
    transform*ooscol* translateX*oospao*-50%*oospac**oosscol*
    background-color*ooscol* #333*oosscol*
    color*ooscol* white*oosscol*
    padding*ooscol* 12px 20px*oosscol*
    border-radius*ooscol* 40px*oosscol*
    font-family*ooscol* sans-serif*oosscol*
    font-size*ooscol* 16px*oosscol*
    opacity*ooscol* 0*oosscol*
    pointer-events*ooscol* none*oosscol*
    transition*ooscol* opacity 0.4s ease*ooscom* transform 0.4s ease*oosscol*
    z-index*ooscol* 9999*oosscol*
  *oosbrcc*

  .toast.show *oosbrco*
    opacity*ooscol* 1*oosscol*
    pointer-events*ooscol* auto*oosscol*
    transform*ooscol* translateX*oospao*-50%*oospac* translateY*oospao*0*oospac**oosscol*
  *oosbrcc*
*oosango**oosfsl*style*oosangc*


*oosango*!-- UI --*oosangc*
*oosango*img style*ooseq**oosqu*margin-top*ooscol* 100px*oosscol* height*ooscol* 80px*oosscol* border-radius*ooscol* 17px*oosscol**oosqu* src*ooseq**oosqu*..*oosfsl*fallback.png*oosqu**oosangc*
*oosango*h2 style*ooseq**oosqu*font-size*ooscol* 24px*oosscol* font-weight*ooscol* 600*oosscol**oosqu**oosangc*Theme Pack*oosango**oosfsl*h2*oosangc*
*oosango*p style*ooseq**oosqu*margin-left*ooscol* 25%*oosscol* width*ooscol* 50%*oosscol**oosqu**oosangc*This theme pack will visually change the look of OlexOS and potentially modify system settings*ooscom* only proceed if this content is from a trusted source.*oosango**oosfsl*p*oosangc*
*oosango*div id*ooseq**oosqu*editor-container*oosqu**oosangc*
*oosango*textarea style*ooseq**oosqu*display*ooscol*none*oosqu* id*ooseq**oosqu*codeInput*oosqu* placeholder*ooseq**oosqu*Type JavaScript code here…*oosqu**oosangc**oosango*style*oosangc*
    .floor *oosbrco*
      background-color*ooscol* rgba*oospao*191*ooscom* 178*ooscom* 101*ooscom* 0.5*oospac**oosscol*
    *oosbrcc*
*oosango**oosfsl*style*oosangc*
*oosango*script*oosangc*
  function replaceBgAudioSource*oospao**oospac* *oosbrco*
    bgAudioFile *ooseq* *oosap*CUSTOMAUDIOFILEURL*oosap**oosscol*       *oosfsl**oosfsl* update the path
    bgAudioElement.src *ooseq* bgAudioFile*oosscol* *oosfsl**oosfsl* apply to the existing element
  *oosbrcc*

replaceBgAudioSource*oospao**oospac**oosscol*
changeSky*oospao**oosap*CUSTOMSKYVIDEOURL*oosap**oospac**oosscol*
changeHatTo*oospao**oosap*CUSTOMHATIMAGEURL*oosap**oospac**oosscol*
*oosango**oosfsl*script*oosangc*

*oosango**oosfsl*textarea*oosangc*

*oosango*!-- Buttons --*oosangc*
*oosango*button class*ooseq**oosqu*btn btn-remove*oosqu* onclick*ooseq**oosqu*location.reload*oospao**oospac**oosscol**oosqu* id*ooseq**oosqu*removeBtn*oosqu**oosangc*Remove Theme*oosango**oosfsl*button*oosangc*
*oosango*button class*ooseq**oosqu*btn btn-apply*oosqu* onclick*ooseq**oosqu*location.reload*oospao**oospac**oosscol**oosqu* id*ooseq**oosqu*saveBtn*oosqu**oosangc*Apply Theme*oosango**oosfsl*button*oosangc*
*oosango**oosfsl*div*oosangc*
*oosango*br*oosangc*
*oosango*button style*ooseq**oosqu*display*ooscol*none*oosscol**oosqu* class*ooseq**oosqu*btn btn-character*oosqu* onclick*ooseq**oosqu*document.getElementById*oospao**oosap*colC*oosap**oospac*.value *ooseq* *oosap*.*oosfsl*emoji*oosfsl*orbs*oosfsl*1.png*ooscom* .*oosfsl*emoji*oosfsl*mouths*oosfsl*1.png*ooscom* .*oosfsl*emoji*oosfsl*eyes*oosfsl*1.png*ooscom* .*oosfsl*emoji*oosfsl*hairs*oosfsl*1.png*ooscom* .*oosfsl*emoji*oosfsl*eyewear*oosfsl*1.png*ooscom* .*oosfsl*emoji*oosfsl*hats*oosfsl*1.png*oosap**oosscol* showToast*oospao**oospac**oosscol**oosqu**oosangc*Apply Custom Character*oosango**oosfsl*button*oosangc*
*oosango*script*oosangc*
  function showToast*oospao*message *ooseq* *oosqu*OOSmoji Updated*ooscom* Visual changes will take effect on restart*oosqu**oospac* *oosbrco*
    const toast *ooseq* document.createElement*oospao**oosqu*div*oosqu**oospac**oosscol*
    toast.className *ooseq* *oosqu*toast*oosqu**oosscol*
    toast.textContent *ooseq* message*oosscol*
    document.body.appendChild*oospao*toast*oospac**oosscol*

    *oosfsl**oosfsl* Trigger animation
    requestAnimationFrame*oospao**oospao**oospac* *ooseq**oosangc* toast.classList.add*oospao**oosqu*show*oosqu**oospac**oospac**oosscol*

    *oosfsl**oosfsl* Remove after 3 seconds
    setTimeout*oospao**oospao**oospac* *ooseq**oosangc* *oosbrco*
      toast.classList.remove*oospao**oosqu*show*oosqu**oospac**oosscol*
      setTimeout*oospao**oospao**oospac* *ooseq**oosangc* toast.remove*oospao**oospac**ooscom* 400*oospac**oosscol*
    *oosbrcc**ooscom* 3000*oospac**oosscol*
  *oosbrcc*
*oosango**oosfsl*script*oosangc*

`.trim(),

  "blank": `
<!-- Blank Template -->

<!-- Start coding your app here -->
`.trim()
};

// (No need to export—just including this file will make `templates` available globally.)
