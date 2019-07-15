<?php 
namespace App\Controller;
use App\Controller\AppController;
use Cake\ORM\TableRegistry;
use Cake\Datasource\ConnectionManager;
use Cake\Auth\DefaultPasswordHasher;

/**
 * Static content controller
 *
 * This controller will render views from Template/Pages/
 *
 * @link http://book.cakephp.org/3.0/en/controllers/pages-controller.html
 */
class UnnatiController extends AppController
{
    public function index(){
        
    	 
    }

    public function aboutus(){
    	
    }

    public function services(){

    }

    public function portfolio(){

    }

    public function ourclient(){

    }

     public function technology(){
    	
    }

     public function contact(){
    	if($this->request->is('post')){
            $name = $this->request->data('name');
            $email = $this->request->data('email');
            $body = $this->request->data('body');          
            $users_table = TableRegistry::get('contact');
            $users = $users_table->newEntity();
            $users->name = $name;
            $users->email = $email;
            $users->body = $body;        
            if($users_table->save($users))
            echo "Message has been send";
            $this->setAction('thank');
         }
    }

   


}
?>