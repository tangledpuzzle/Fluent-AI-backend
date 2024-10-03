import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import config

def send_email(receiver_email, subject, message):
    # Create a multipart message
    email_message = MIMEMultipart()
    email_message["From"] = config.from_mail
    email_message["To"] = receiver_email
    email_message["Subject"] = subject
    # Add the message body
    email_message.attach(MIMEText(message, "html"))

    # Connect to the SMTP server
    with smtplib.SMTP(config.SMTP_HOST, config.SMTP_PORT) as server:
        server.starttls()
        server.login(config.SMTP_USER, config.SMTP_PASSWORD)
        server.send_message(email_message)


