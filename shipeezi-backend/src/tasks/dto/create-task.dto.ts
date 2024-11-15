import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsOptional()
  @IsString()
  status?: string;

  @IsOptional()
  @IsString({ each: true })
  tags?: string[];

  @IsNumber()
  storyPoints: number;

  @IsNumber()
  createdBy: number;

  @IsOptional()
  @IsNumber()
  assignee?: number;
}
