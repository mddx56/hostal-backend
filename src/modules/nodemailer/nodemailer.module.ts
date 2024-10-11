import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { join } from 'path';
import { NodemailerService } from './nodemailer.service';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
          user: 'santos.dubuque@ethereal.email',
          pass: 'J4rFKxYGWkwRt77ETU'
        },
      },
      defaults: {
        from: '"No Reply" <tatu@gmail.com>',
      },
      template: {
        dir: join(__dirname, '..', '..', 'views', 'emails'),
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
    }),
  ],
  providers: [NodemailerService],
  exports: [NodemailerService],
})
export class NodemailerModule { }
