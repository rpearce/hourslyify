namespace :mailer do
  desc 'Low balance notification'
  task low_balance: :environment do
    users = [{ name: 'Bob', email: 'b@z.com', balance: '27' }, { name: 'McGover', email: 'mcg@over.com', balance: '32' }]
    users.each do |user|
      GeneralMailer.low_balance(user[:name], user[:email], user[:balance]).deliver_later
    end
  end
end
