class Node
{
public:
int data;
Node *next;
Node()
{
data=0;
next=NULL;
}
};
class Stack
{
Node *top;
public:
Stack()
{ 
    top=NULL;
 }
bool isFull()
{
Node *newnode=new Node();
if (newnode==NULL)                                                             
return true;
else                                                                                          
 return false;                                                                                            
 }                                                                                                                                    
  bool isEmpty()
{
     if (top==NULL) 
     return true; 
     else
      return false; 
    }                           
     void  push(int item)
{
Node *newnode=new Node();
newnode->data=item;
if(isEmpty())
{
newnode->next=NULL; 
top=newnode;
}
else
{
newnode->next=top;
top=newnode;
}
}
};