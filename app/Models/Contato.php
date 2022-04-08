<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contato extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $table = 'contatos';
    protected $fillable = ['nome', 'telefone'];
}
