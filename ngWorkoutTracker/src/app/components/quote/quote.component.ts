import { Subscription, interval } from 'rxjs';
import { Component } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent {
  quote =  '“You did not wake up today to be mediocre.”';
  subscription = new Subscription();
  counter = 0;
  quotes = [
    '“Strength does not come from physical capacity. It comes from an indomitable will.”',
    '“Success usually comes to those who are too busy to be looking for it.”',
    '“If you want something you’ve never had, you must be willing to do something you’ve never done.”',
    '“The body achieves what the mind believes.”',
    '“Once you are exercising regularly, the hardest thing is to stop it.”',
    '“Dead last finish is greater than did not finish, which trumps did not start.”',
    '“If you don’t make time for exercise, you’ll probably have to make time for illness.”',
    '“The best way to predict the future is to create it.”',
    '“Rome wasn’t built in a day, but they worked on it every single day.”',
    '“All progress takes place outside the comfort zone.”',
    '“Your body can stand almost anything. It’s your mind that you have to convince.”',
    '“What seems impossible today will one day become your warm-up.”',
    '“Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway.”',
    '“I don’t count my sit-ups. I only start counting when it starts hurting because they’re the only ones that count.”',
    '“Go the extra mile. It’s never crowded.”',
    '“If you change the way you look at things, the things you look at change.”',
    '“You just can’t beat the person who never gives up.”',
    '“Take care of your body. It’s the only place you have to live.”',
    '“Do something today that your future self will thank you for.”',
    '“Push harder than yesterday if you want a different tomorrow.”',
    '“Success is usually the culmination of controlling failure.”',
    '“Your health account, your bank account, they’re the same thing. The more you put in, the more you can take out.”',
    '“Don’t say ‘I can’t.’ Say, ‘I presently struggle with’.”',
    '“Motivation is what gets you started. Habit is what keeps you going.”',
    '“We are what we repeatedly do. Excellence then is not an act but a habit.”',
    '“Your body can stand almost anything. It’s your mind that you have to convince.”',
    '“Nobody who ever gave his best regretted it”',
    '“There are two types of pain in this world: pain that hurts you, and pain that changes you.”',
    '“Ability is what you’re capable of doing. Motivation determines what you do. Attitude determines how well you do it.”',
    '“When you hit failure, your workout has just begun.”',
    '“The secret of getting ahead is getting started.”',
    '“You can either suffer the pain of discipline or the pain of regret.”',
    '"I hated every minute of training, but I said, "Don’t quit. Suffer now and live the rest of your life as a champion.""',
    '“No matter how slow you go you’re still lapping everyone on the couch.”',
    '“When it comes to eating right and exercising, there is no ‘I’ll start tomorrow’.”',
    '“We do not stop exercising because we grow old- we grow old because we stop exercising”',
    '“It never gets easier, you just get better.”',
    '“The gym is not the social club for the fit. It’s a training ground for everyone.”',
    '“The mind is the most important part of achieving any fitness goal. Mental change always comes before physical change.”',
    '“It always seems impossible until it is done”',
    '“You don’t have to be good at it, you just have to do it.”',
    '“You have to push past your perceived limits, push past that point you thought was as far as you can go.”',
    '“In training, you listen to your body. In competition, you tell your body to shut up.”',
    '“Good things come to those who sweat.”',
    '“You’re going to have to let it hurt. Let it suck. The harder you work, the better you will look. Your appearance isn’t parallel to how heavy you lift, it’s parallel to how hard you work.”',
    '“Don’t limit your challenges. Challenge your limits.”',
    '“Believe in yourself and all that you are. Know that there is something inside of you that is greater than any obstacle.”',
    '"Be like Nike, Just Do It"',
    '“All progress takes place outside the comfort zone.”',
    '“You may not be there yet, but you are closer than you were yesterday”',
    '“The pain you feel today, will be the strength you feel tomorrow.”',
    '“A little progress each day adds up to big results”',
    '“When you feel like quitting, think about why you started.”',
    '“A one hour workout is only 4% of your day. No excuses.”',
    '“Your success is found in your daily routine.”',
    '“You are one workout away from a better mood”',
    '“The best investment you make is your own health.”',
    '“Three months from now, you will thank yourself”',
    '“Take care of your body, it’s the only place you have to live”',
    '“Once you see results, it becomes an addiction”',
    '“Don’t give up because you had a bad day. Forgive yourself and do better tomorrow.”',
    '“You have to think it before you can do it. The mind is what makes it all possible.”',
    '“Eat good. Feel good.”',
    '“Eating well is a form of self respect.” ',
    '"Tomorrow you will wish you had started today.”',
  ];

  ngOnInit(){
    this.subscription = interval(13000).subscribe( () => {
      let index = Math.floor((Math.random() * this.quotes.length))
      this.quote = this.quotes[index];
    })
  }
}
