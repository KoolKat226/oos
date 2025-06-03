// templates.js

// Define your three templates here.
// You can later replace the placeholder comments with your own template code.
const templates = {
  "1": `
*oosango*iframe frameborder*ooseq**oosap*0*oosap* style*ooseq**oosap*position*ooscol* absolute*oosscol* top*ooscol* 0*oosscol* left*ooscol* 0*oosscol* border*ooscol* none*oosscol* height*ooscol* 100%*oosscol* width*ooscol* 100%*oosscol**oosap* src*ooseq**oosap*PUTYOURWEBSITEURLHERE*oosap**oosangc**oosango**oosfsl*iframe*oosangc*
`.trim(),

  "2": `

*oosango*div id*ooseq**oosqu*editor-container*oosqu**oosangc*
  *oosango*h2*oosangc*Edit JavaScript *oospao*optional*oospac**oosango**oosfsl*h2*oosangc*
  *oosango*textarea id*ooseq**oosqu*codeInput*oosqu* placeholder*ooseq**oosqu*Type JavaScript code here…*oosqu**oosangc**oosango*style*oosangc*
    .floor *oosbrco*
      background-color*ooscol* rgba*oospao*0*ooscom* 0*ooscom* 0*ooscom* 0.5*oospac**oosscol*
    *oosbrcc*
*oosango**oosfsl*style*oosangc*
*oosango*script*oosangc*
  function changeVideoToBurger*oospao**oospac* *oosbrco*
    const video *ooseq* document.getElementById*oospao**oosap*skyvid*oosap**oospac**oosscol*
    const source *ooseq* video.querySelector*oospao**oosap*source*oosap**oospac**oosscol*
    source.src *ooseq* *oosap*https*ooscol**oosfsl**oosfsl*cdn.glitch.global*oosfsl*d53e0a5c-155f-47f4-b9c5-e40fdba7d98f*oosfsl*coool.mp4*oosap**oosscol*
    video.load*oospao**oospac**oosscol* *oosfsl**oosfsl* Reloads video with new source
toggleSkyVideo*oospao**oospac**oosscol*
  *oosbrcc*
changeVideoToBurger*oospao**oospac**oosscol*
*oosango**oosfsl*script*oosangc*
*oosango**oosfsl*textarea*oosangc**oosango*br*oosangc*
  *oosango*button onclick*ooseq**oosqu*location.reload*oospao**oospac**oosscol**oosqu* id*ooseq**oosqu*saveBtn*oosqu**oosangc*Apply Theme*oosango**oosfsl*button*oosangc*
*oosango**oosfsl*div*oosangc*
`.trim(),

  "blank": `
<!-- Blank Template -->

<!-- Start coding your app here -->
`.trim()
};

// (No need to export—just including this file will make `templates` available globally.)
