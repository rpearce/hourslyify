class GeneralMailer < ApplicationMailer
  def send_welcome_email(email)
    @url = 'http://www.theironyard.com'
    mail(to: email, subject: 'Welcome to the club!')
  end

  def meetup_reminder(emails)
    mail(to: 'robert@tiy.com', bcc: emails, subject: 'Reminder -- C.js Meetup is tomorrow')
  end

  def low_balance(name, email, balance)
    @name = name
    @email = email
    @balance = balance
    mail(to: email, subject: 'Low Balance Alert')
  end
end
