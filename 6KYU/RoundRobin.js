function roundRobin(jobs, slice, index) {
    let TQ = 0;
    while (jobs[index] > 0) {
      for (let i = 0; i < jobs.length; i++) {
        const job = jobs[i];
        if (job > 0) {
          const runTime = Math.min(slice, job);
          TQ += runTime;
          jobs[i] -= runTime;
          if (i === index && jobs[i] === 0) return TQ;
        }
      }
    }
    return TQ;
  }
  