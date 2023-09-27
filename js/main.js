let app = new Vue ({
    el: '.main', 
    data: {
         showMain: true,
         showSocial: false,
         showAchivments: false,
         showQuestions: false,
         showResult: false,
         number: 0,
         score: {
             'excellent': 0, 
             'verygood': 0, 
             'good': 0, 
             'satisfactory': 0,
             'fail': 0,
         },
         totalGame: localStorage.getItem('sc2TotalGame') ? JSON.parse(localStorage.getItem('sc2TotalGame')): {
             'excellent': 0, 
             'verygood': 0, 
             'good': 0,
             'satisfactory': 0,
             'fail': 0,
         },

         totalGames: localStorage.getItem('sc2TotalGames') ? localStorage.getItem('sc2TotalGames') : 0,
         questions: questions,
         results: results,
         resultEstimation: 'excellent',
    },
    methods: {
     goToMain() {
         this.showMain = true
         this.showSocial = false
         this.showAchivments = false
         this.showQuestions = false
         this.showResult = false
     },
     goToSocial() {
         this.showMain = false
         this.showSocial = true
         this.showAchivments = false
         this.showQuestions = false
         this.showResult = false
     },
     goToAchivments() {
         if(this.totalGames > 0) {
          this.showMain = false
         this.showSocial = false
         this.showAchivments = true
         this.showQuestions = false
         this.showResult = false   
         } else {
             this.goToQuestions()
         }
     },
     goToQuestions() {
         this.score = {
             'excellent': 0,
             'verygood': 0,
             'good': 0,
             'satisfactory': 0,
             'fail': 0,
         }
         this.showMain = false
         this.showSocial = false
         this.showAchivments = false
         this.showQuestions = true
         this.showResult = false 
     },
     goToResult(Estimation) {
         this.showMain = false
         this.showSocial = false
         this.showAchivments = false
         this.showQuestions = false
         this.showResult = true
         this.resultEstimation = 
         Estimation
     },
    //  goToFa() {
    //     if(document.querySelector('.appResultName') == 'good') {
    //         document.querySelector('.fa1').style.display = "none"
    //     }
    
    //  },
     nextQuestions(answer) {
         if(this.number == 24) {
            this.number = 0
          this.endGame();
         } else {
             this.number++
         }
         eval(answer)
     },
     endGame() {
         this.totalGames++;
         localStorage.setItem('sc2TotalGames', this.totalGames)
         // excellent
         if(this.score.excellent > 23) {
             this.goToResult('excellent')
             this.totalGame.excellent++
         }
         // verygood
         else if (this.score.excellent > 19  && this.score.excellent < 24) {
             this.goToResult('verygood')
             this.totalGame.verygood++
         }
            // good
            else if (this.score.excellent > 14  && this.score.excellent < 20) {
             this.goToResult('good')
             this.totalGame.good++
         }
          // satisfactory
          else if (this.score.excellent > 9  && this.score.excellent < 15) {
             this.goToResult('satisfactory')
             this.totalGame.satisfactory++
         }
         // fail
         else if (this.score.excellent < 10) {
             this.goToResult('fail')
             this.totalGame.fail++
            //  document.getElementById("fa3").setAttribute("hidden", true)
         }

         localStorage.setItem('sc2TotalGame', JSON.stringify(this.totalGame))
     }
    },
    computed: {
    //  maxScore() {
    //      let score=0
    //      for(let i in this.totalGame) {
    //      score+=(this.totalGame[i]*results[i].points)
    // }
    // return score
    //  },
      openEstimations() {
         let count = 0
         for(let i in this.totalGame) {
         if(this.totalGame[i] > 0) count++
    }
         return count
     },
   
    //    favoriteEstimation() {
    //         if(document.getElementById('estimat').textContent === 'good') {
    //         }
    //         return  document.getElementById("fa1").setAttribute("hidden", true)
    //         //  document.querySelector('.fa1').style.display = "none"
    // }, 
 
     showResultEstimation() {
         return {
             'excellent': this.totalGame.excellent > 0 ? true : false,
             'verygood': this.totalGame.verygood > 0 ? true : false,
             'good': this.totalGame.good > 0 ? true : false,
             'satisfactory': this.totalGame.satisfactory > 0 ? true : false,
             'fail': this.totalGame.fail > 0 ? true : false,
         }
     },
     maxEstimation() {
        if(this.totalGame.excellent > 0) {
            return '5+'
        } else if(this.totalGame.verygood > 0) {
            return '5'
        }  else if(this.totalGame.good > 0) {
            return '4'
        }  else if(this.totalGame.satisfactory > 0) {
            return '3'
        }  else if(this.totalGame.fail > 0) {
            return '2'
        }
     }
    }
 })

