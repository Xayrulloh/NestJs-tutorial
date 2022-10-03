import { IsString, IsOptional, IsNotEmpty } from "class-validator";

export class CreateBookmarkDto {
  @IsNotEmpty()
  @IsString()
  title: string;
  
  @IsOptional()
  @IsString()
  description?: string;
  
  @IsNotEmpty()
  @IsString()
  link: string;
}