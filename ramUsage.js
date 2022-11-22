const os = require('os');

setInterval(() => {

   const { arch, platform, totalmem, freemem } = os;
   const tRam = totalmem / 1024 / 1024;
   const tMem = freemem / 1024 / 1024;

   const usage = (tRam / tMem) * 100;

   const stats = {
      OS: platform(),
      Arch: arch(),
      TotalRam: `${parseInt(tRam)} MB`,
      FreeRam: `${parseInt(tMem)} MB`,
      Usage: `${usage.toFixed(2)} %`,
   }

   console.clear();
   console.table(stats);

   exports.stats = stats;
}, 1000);